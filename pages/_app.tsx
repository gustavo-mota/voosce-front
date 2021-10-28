import '../styles/globals.css'
import dscegov from 'cegov-antd'
import 'cegov-antd/dist/index.css'
import type { AppProps } from 'next/app'
import {ConfigProvider, Row, Col, Typography, Button} from 'antd'
import pt_BR from 'antd/lib/locale/pt_BR'
import { KeyOutlined } from '@ant-design/icons'
import Link from 'next/link';
const { Title } = Typography
const {Header, Footer, Acessibility} = dscegov();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider locale={pt_BR} >
      <Acessibility accessibility />
        <Header title="Voosce - Sistemas de Voos do Ceará">
        <Row
          gutter={8}
          align="middle"
          justify="space-between"
          style={{ width: "95%" }}
        >
          <Col>
            <Row justify="end" align="middle">
            <Col>
                <Link href="/">
                  <img height={85} width="auto" src="https://i.ibb.co/R90NzmY/logo-ce.png" />
                </Link>
              </Col>
              <Col>
                <div
                  style={{
                    background: '#fff', height: 42, width: 2,
                    marginLeft: 15, marginRight: 15
                  }}
                />
              </Col>
              <Col>
                <Link href="/dashboard">
                  <Title
                    level={2}
                    style={{ marginBottom: 0, color: '#fff', fontSize: '1.6rem' }}
                  >Sistema de Voos do Ceará - Voosce</Title>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col>
            <Link href="/login">
              <Button icon={<KeyOutlined />} type="primary">Navegar no sistema</Button>
            </Link>
          </Col>
        </Row>
        </Header>
          <Component {...pageProps} />
        <Footer></Footer>
    </ConfigProvider>
  )
}

export default MyApp
