import React from 'react';
import { Layout, Card, Row, Col, Form, Input, Button, Select } from 'antd';
const { Content } = Layout;
const { TextArea } = Input;
import MaskedInput from 'antd-mask-input'

import { UserOutlined, BankOutlined, BarcodeOutlined } from '@ant-design/icons'
const { Option } = Select;

export default function reservar() {
    return (<Layout>
        <Content>
            <Row
                justify="space-around" align="middle" style={{
                    padding: 45, height: "calc(100vh - 150px)"
                }}>
                <Card title="Sistema de Cadastro de Reservas" style={{ width: "25vw", padding: 15 }}>
                    <Col>
                        <div>
                            <p>Adicione os dados de reserva.</p>
                        </div>
                    </Col>
                    
                    <Form.Item name="cod"
                        rules={[
                            { required: true, message: "É necessário um código de reserva" },
                            {
                                type: "number",
                                min: 3,
                                message: 'O código deve conter apenas números e pelo menos 3 dígitos'
                            }
                        ]}>
                        <span style={{ fontWeight: 'bold' }}>Código da reserva:</span>
                        <Input placeholder="Insira o código de reserva" size="large" allowClear prefix={<BarcodeOutlined />} />
                    </Form.Item>
                    <Form.Item name="nome"
                        rules={[
                            { required: true, message: "Por favor, insira o nome do cliente" },
                            {
                                type: "string",
                                min: 4,
                                message: 'O nome precisa ter mais do que 04 caracteres'
                            }
                        ]}>
                        <span style={{ fontWeight: 'bold' }}>Nome do cliente:</span>
                        <Input placeholder="Insira o nome do cliente" size="large" allowClear prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item name="companhia">
                        <span style={{ fontWeight: 'bold' }}>Companhia</span>
                        <Select placeholder="Selecione a companhia" allowClear>
                            <Option value="azul">azul</Option>
                            <Option value="gol">gol</Option>
                            <Option value="latam">latam</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="voo">
                        <span style={{ fontWeight: 'bold' }}>Voo</span>
                        <Select placeholder="Selecione o voo disponível" allowClear>
                            <Option value="010">São paulo - Fortaleza</Option>
                            <Option value="020">Rio de Janeiro - Fortaleza</Option>
                            <Option value="030">Fortaleza - São Paulo</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="valor" rules={[
                        { required: true, message: 'Necessário declarar algum valor de reserva' },
                        {
                            type: 'float',
                            max: 6,
                            message: 'Insira um valor válido'
                        }
                    ]}>
                        <span style={{ fontWeight: 'bold' }}>Valor da reserva:</span>
                        <MaskedInput size="large"
                                mask="111.11"
                                allowClear
                                type="string"
                                placeholder="Insira o valor da reserva."
                                
                            />
                    </Form.Item>
                    <Form.Item style={{float: 'right'}}>
                        <Button htmlType="submit" type="primary">Reservar</Button>
                    </Form.Item>
                </Card>
            </Row>
        </Content>
    </Layout>)
}
