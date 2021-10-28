import React, { useState } from 'react';
import { Layout, Row, Card, Divider, Form, Input, Button, Alert, Spin } from 'antd'
import MaskedInput from 'antd-mask-input'

import { CreditCardOutlined } from '@ant-design/icons'
import axios from '../../utils/axios';
import { useRouter } from 'next/dist/client/router';


const { Content } = Layout

export default function Login() {
    const [messegeError, setMessageError] = useState("");
    const router = useRouter();

    const login = ({cpf, password}) => {
        //console.log(cpf, password)
        //const username = cpf.replace(/\D/g, "");

        axios.get("classes/Logins", {
            params: {
                CPF: cpf,
                password: password
            }
        }).then(reponse => {
            localStorage.setItem("usuarioLogado", JSON.stringify(reponse.data));
            router.push("/dashboard")
        }).catch(erro => {
            setMessageError("CPF ou senha inválida!");
        })
    };

    return (
        <Layout>
        <Content>
            <Row justify="space-around"
                align="middle"
                style={{ background: "#fff", height: "calc(100vh - 150px)" }}>
                <Card style={{ width: "25vw", padding: 15 }}>
                    <div>
                        <h2 style={{ color: '#2D4040', fontWeight: "bold", paddingTop: 45 }}>Faça Login para continuar</h2>
                        <p>Insira seu CPF e senha.</p>
                    </div>
                    <Divider />
                    <Form onFinish={login}>
                        {
                            messegeError && (
                                <div style={{marginBottom: 25, color: "#F05152"}}>
                                    <Alert message={messegeError} type="error" showIcon closable />
                                </div>
                            )
                        }

                        <Form.Item name="cpf" rules={[
                            { required: true, message: "Por favor, insira seu CPF!" },
                            {
                                type: "string",
                                max: 14,
                                min: 11,
                                message: "Por favor, insira um CPF válido"
                            }
                        ]}>
                            <MaskedInput size="large"
                                mask="111.111.111-11"
                                allowClear
                                type="string"
                                placeholder="Insira seu CPF"
                            />
                        </Form.Item>
                        <Form.Item name="password" rules={[
                            {
                                required: true,
                                message: "Por favor, insira sua senha"
                            },
                            {
                                type: "string",
                                min: 4,
                                message: "Por favor, insira uma senha maior do que 04 digitos"
                            }
                        ]}>
                            <Input.Password size="large" placeholder="Insira sua senha" type="password
                            " />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit"> Entrar</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Row>
        </Content>
    </Layout>

    )
}