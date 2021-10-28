import React, {useState, useEffect} from 'react';
import { Layout, Row, Col, Select, Button, Card, Pagination } from 'antd'
import styles from '../../styles/.dashboard.module.css';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import axios from '../../utils/axios';
const { Content } = Layout
const { Option } = Select

export default function Dashboard() {
    const [selectedOpt, setSelectedOpt] = useState("");
    const [selectedOption, setSelectedOption] = useState([]);

    useEffect(() => {
        axios.get("/classes/Voos").then(response => {
            setSelectedOption(response.data.results)
        })
    }, []);

    useEffect(() => {
        axios.get("/classes/Reservas").then(response => {
            setSelectedOption(response.data.results)
        })
    }, []);


    function handleChange(value){
        console.log(value);
        setSelectedOpt(value)
    }

    const showOption = (opt) => {
        if(selectedOpt == 'Voo'){
            return (
                <>
                    <p>Origem: {opt.origem}, Destino: {opt.destino}</p>                
                    <p>Assentos: {opt.ast_livres}</p>
                    <p>Código do voo: {opt.cod}</p>
                    <p>Companhia: {opt.companhia}</p>
                </>
            )
        }else{
            return (
                <>
                    <p>Código da Reserva: {opt.cod}</p>                
                    <p>Voo: {opt.voo}</p>
                    <p>Companhia: {opt.companhia}</p>
                    <p>Nome do cliente: {opt.nome}</p>
                    <p>Preço: {opt.valor}</p>
                </>
            )
        }
    }

    return (
        <Layout style={{ padding: "0 24px 24px" }}>
            <Content>
                <Row className={styles.container}>
                    <Row className={styles.container_item}>
                        <h1 className={styles.title}>Lista de Voos e Reservas Cadastradas</h1>
                    </Row>
                    <Row className={styles.container_item}>
                        <Col
                            span={19}
                            xs={{ span: 17 }}
                            sm={{ span: 19 }}
                            md={{ span: 19 }}
                            lg={{ span: 19 }} >
                            <Select
                                style={{ width: "100%" }}
                                onChange={handleChange}
                                size="large"
                                placeholder="Selecione uma opção de consulta"
                                showSearch
                            >
                                <Option value="Voos">Voos</Option>
                                <Option value="Reservas">Reservas</Option>
                            </Select>
                            <Select
                                style={{ width: "100%" }}
                                size="large"
                                placeholder="Selecione a companhia"
                                showSearch
                            >
                                <Option value="azul">azul</Option>
                                <Option value="gol">gol</Option>
                                <Option value="latam">latam</Option>
                            </Select>
                            <Select
                                style={{ width: "100%" }}
                                size="large"
                                placeholder="Selecione um destino"
                                showSearch
                            >
                                <Option value="101">Fortaleza</Option>
                                <Option value="301">Rio de Janeiro</Option>
                                <Option value="201">São Paulo</Option>
                            </Select>
                            <Col
                                xs={{ span: 6, offset: 1 }}
                                sm={{ span: 4, offset: 1 }}
                                md={{ span: 4, offset: 1 }}
                                lg={{ span: 4, offset: 1 }}
                            >
                                <Button className={styles.filter_button} type="primary">Filtrar</Button>
                            </Col>
                        </Col>
                    </Row>
                    <Row className={styles.container_item}>
                        {   selectedOption.map((opt) => (
                            <Col span={24}>
                                <Row gutter={16}>
                                    <Col span={8}>
                                        <Card 
                                            actions={[
                                                <EditOutlined key="edit"  style={{color:'#4B9F37'}}/>,
                                                <DeleteOutlined  key="delete" style={{ color: '#C2102A'}}/>
                                            ]}
                                            title={selectedOpt} headStyle={{ fontWeight: 'bold', color: '#4B9F37', fontSize:'1.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                            <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>Descrição</span>
                                            <div>{showOption(opt)}</div>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            ))
                        }
                    </Row>
                </Row>
                <Pagination style={{ display: 'flex', justifyContent: 'center' }} defaultCurrent={1} total={50} />

            </Content>
        </Layout>
    )
}
