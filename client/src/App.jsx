import { useEffect, useState } from "react";
import {
  AbsoluteCenter,
  Box,
  Button,
  Card,
  Center,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Textarea,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";
import { getAll } from "./services/axios-config/pessoaService";

const { data, error, isError, isLoading } = useQuery("pessoas", getAll);

console.log(data);
function App() {
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
                  {data.map((item) => (
                    <Tr>
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

export default App;
