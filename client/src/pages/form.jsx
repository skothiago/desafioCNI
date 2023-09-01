import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Table,
  TableContainer,
  Tbody,
  Td,
  Textarea,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import NumberFormat from "react-number-format";
import { useDebounce } from "../hooks/UseDebonce";
import { PessoasService } from "../services/axios-config/pessoaService";
import { PrintDocumentImport } from "./printPdfFile";

const Form = () => {
  const { debounce } = useDebounce();
  const [data, setData] = useState();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    debounce(() => {
      PessoasService.getAll().then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          setData(result.data);
        }
      });
    });
  }, [debounce]);

  const onSubmit = (data) => {
    data.dtNasc = data.dtNasc.split("/").reverse().join("-");
    PessoasService.create(data);
  };

  const handleDelete = (id) => {
    PessoasService.deleteById(id);
  };

  return (
    <Box>
      <Center>
        <Card mt="2rem" padding={2} maxW="2xl">
          <Center>
            <Heading>Cadastro de pessoa</Heading>
          </Center>
          <Box as="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.nome}>
              <FormLabel htmlFor="nome">
                <Box display="inline-block" mr={3}>
                  Nome Completo*
                </Box>
              </FormLabel>
              <Input
                bgColor="gray.50"
                {...register("nome", { required: "Nome é obrigatório." })}
              />
              <FormErrorMessage>{errors.nome?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.email}>
              <FormLabel htmlFor="email">
                <Box display="inline-block" mr={3}>
                  E-mail*
                </Box>
              </FormLabel>
              <Input
                bgColor="gray.50"
                {...register("email", {
                  required: "E-mail é obrigatório.",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Insira um e-mail válido.",
                  },
                })}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.sexo}>
              <Flex direction="column">
                <FormLabel as="legend">Sexo*</FormLabel>
                <RadioGroup name="sexo">
                  <HStack spacing="24px">
                    <Radio
                      value="masculino"
                      type="radio"
                      {...register("sexo", {
                        required: "O campo sexo é obrigatório",
                      })}
                    >
                      Masculino
                    </Radio>
                    <Radio
                      value="feminino"
                      type="radio"
                      {...register("sexo", {
                        required: "O campo sexo é obrigatório",
                      })}
                    >
                      Feminino
                    </Radio>
                  </HStack>
                </RadioGroup>
                <FormErrorMessage>{errors.sexo?.message}</FormErrorMessage>
              </Flex>
            </FormControl>

            <FormControl isInvalid={!!errors.dtNasc}>
              <FormLabel htmlFor="dtNasc">
                <Box display="inline-block" mr={3}>
                  Data de nascimento*
                </Box>
              </FormLabel>
              <Controller
                name="dtNasc"
                defaultValue=""
                control={control}
                rules={{
                  required: "Data de nascimento é obrigatorio",
                }}
                render={({ field }) => (
                  <NumberFormat
                    {...field}
                    customInput={Input}
                    bgColor="gray.50"
                    format="##/##/####"
                  />
                )}
              />
              <FormErrorMessage>{errors.dtNasc?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.fone}>
              <FormLabel htmlFor="fone">
                <Box display="inline-block" mr={3}>
                  Telefone Fixo
                </Box>
              </FormLabel>
              <Controller
                name="fone"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <NumberFormat
                    {...field}
                    customInput={Input}
                    bgColor="gray.50"
                    format="(##)####-####"
                  />
                )}
              />
            </FormControl>

            <FormControl isInvalid={!!errors.fraseMotiv}>
              <FormLabel htmlFor="fraseMotiv">
                <Box display="inline-block" mr={3}>
                  Frase motivacional
                </Box>
              </FormLabel>
              <Textarea bgColor="gray.50" {...register("fraseMotiv")} />
            </FormControl>

            <Center>
              <Button type="submit" mt="1rem" colorScheme="green">
                Cadastrar
              </Button>
            </Center>
          </Box>
        </Card>
      </Center>

      <Center>
        <Card mt="2rem">
          <Box w="1400px">
            <TableContainer mt="2rem">
              <Center>
                <Heading>Pessoas Cadastradas</Heading>
                <Button
                  ml="4rem"
                  colorScheme="green"
                  onClick={() => PrintDocumentImport(data)}
                >
                  Gerar relatorio
                </Button>
              </Center>
              <Table mt={"2rem"} variant="simple">
                <Thead>
                  <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th>Sexo</Th>
                    <Th>Data de Nascimento</Th>
                    <Th>Telefone</Th>
                    <Th>Frase Motivacional</Th>
                    <Th>ação</Th>
                  </Tr>
                </Thead>
                {data && (
                  <Tbody>
                    {data.map((item) => (
                      <Tr key={item.id}>
                        <Td>{item.nome}</Td>
                        <Td>{item.email}</Td>
                        <Td>{item.sexo}</Td>
                        <Td>{item.dtNasc}</Td>
                        <Td>{item.fone}</Td>
                        <Td>{item.fraseMotiv}</Td>
                        <Td>
                          {/* <Button mr="1rem" colorScheme="orange">
                            editar
                          </Button> */}
                          <Button
                            colorScheme="red"
                            onClick={() => handleDelete(item.id)}
                          >
                            deletar
                          </Button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                )}
              </Table>
            </TableContainer>
          </Box>
        </Card>
      </Center>
    </Box>
  );
};

export default Form;
