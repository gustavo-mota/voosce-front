import React from 'react';
import { Layout, Card, Row, Col, Form, Input, Button, Select, Divider} from 'antd';
const { Content } = Layout;
const { TextArea } = Input;
import MaskedInput from 'antd-mask-input'

import { UserOutlined, BankOutlined, BarcodeOutlined } from '@ant-design/icons'
const { Option } = Select;

export default function locais() {
    return (
        <Layout>
        <Content>
            <Row justify="space-around"
                align="middle"
                style={{ background: "#fff", height: "calc(100vh - 150px)" }}>
                <Card style={{ width: "25vw", padding: 15 }}>
                    <div>
                        <h2 style={{ color: '#2D4040', fontWeight: "bold", paddingTop: 45 }}>Cadastro de local:</h2>
                        <p>Preencha as informações do local.</p>
                    </div>
                    <Divider />
                    <Form>
                        <Form.Item name="cod" rules={[
                            { required: true, message: "Por favor, insira seu CPF!" },
                            {
                                type: "string",
                                min: 3,
                                message: "Por favor, insira um código para o local"
                            }
                        ]}>
                            <span style={{ fontWeight: 'bold' }}>Código:</span>
                            <Input size="large"
                                allowClear
                                type="string"
                                placeholder="Insira um código"
                            />
                        </Form.Item>
                        <Form.Item name="nome" rules={[
                            {
                                required: true,
                                message: "Por favor, insira um nome"
                            },
                            {
                                type: "string",
                                min: 4,
                                message: "Por favor, insira um nome maior do que 04 digitos"
                            }
                        ]}>
                            <span style={{ fontWeight: 'bold' }}>Nome:</span>
                            <Input size="large" placeholder="Insira um nome"  />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit"> Adicionar</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Row>
        </Content>
    </Layout>

    )
}