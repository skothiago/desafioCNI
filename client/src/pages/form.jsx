import {
  Box,
  Button,
  Card,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Textarea,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/UseDebonce';
import { PessoasService, } from '../services/axios-config/pessoaService';



const Form = () => {
  const { debounce } = useDebounce();
  const [data, setData] = useState();
  
  useEffect(() => {
  
    debounce(() => {
      PessoasService.getAll()
        .then((result) => {
          if (result instanceof Error) {
            alert(result.message);
          } else {
            console.log(result);
            setData(result)
          }
        });
    });
  }, [debounce]);
  
  return (
    <Box>
      <Center>
        <Card mt="2rem" padding={2} maxW="2xl">
          <Center>
            <Heading>Cadastro de pessoa</Heading>
          </Center>
          <FormControl>
            <FormLabel>Nome: </FormLabel>
            <Input type="text" />
            <FormLabel>Email: </FormLabel>
            <Input type="email" placeholder="exemplo@mail.com" />
            <RadioGroup>
              <FormLabel>Sexo: </FormLabel>
              <Stack spacing={5} direction="row">
                <Radio colorScheme="blue" value="masculino">
                  Masculino
                </Radio>
                <Radio colorScheme="pink" value="feminino">
                  Feminino
                </Radio>
              </Stack>
            </RadioGroup>
            <FormLabel>Data de Nascimento: </FormLabel>
            <Input type="email" placeholder="00/00/0000" />
            <FormLabel>Telefone: </FormLabel>
            <Input type="string" placeholder="(99) 9 9999-9999" />
            <FormLabel>Frase motivacional: </FormLabel>
            <Textarea placeholder="Digite aqui sua frase..." />
            <Center>
              <Button mt="1rem" colorScheme="green">
                Enviar
              </Button>
            </Center>
          </FormControl>
        </Card>
      </Center>
      <Center>
        <Card mt="2rem">
          <Box w="1400px">
            <TableContainer mt="2rem">
              <Center>
                <Heading>Pessoas Cadastradas</Heading>
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
                <Tbody>
                  {data.map((item, i) => (
                    <Tr key={i}>
                      <Td>{item.nome}</Td>
                      <Td>{item.email}</Td>
                      <Td>{item.sexo}</Td>
                      <Td>{item.dtNasc}</Td>
                      <Td>{item.fone}</Td>
                      <Td>{item.fraseMotiv}</Td>
                      <Td>
                        <Button mr="1rem" colorScheme="orange">
                          editar
                        </Button>
                        <Button colorScheme="red">deletar</Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Card>
      </Center>
    </Box>
  );
}

export default Form;
