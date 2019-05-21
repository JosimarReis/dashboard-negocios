import React from 'react';
import { connect } from 'react-redux';
//import { userActions } from "../../_store/_actions";
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

import { produtosActions } from "../../_store/_actions";



class Dashboard extends React.Component {

  componentDidMount() {
    this.props.onLoadProdutos({pagina:1, limit:1})
  }

  logout = () => {
    //   this.props.dispatch(userActions.logout());
    this.props.history.push("/login");
  }


  render() {
    const { user } = this.props;
    const brandPrimary = getStyle('--primary')
    const brandSuccess = getStyle('--success')
    const brandInfo = getStyle('--info')
    const brandWarning = getStyle('--warning')
    const brandDanger = getStyle('--danger')
    // Card Chart 1
    const cardChartData1 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: brandPrimary,
          borderColor: 'rgba(255,255,255,.55)',
          data: [65, 59, 84, 84, 51, 55, 40],
        },
      ],
    };

    const cardChartOpts1 = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips
      },
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: 'transparent',
              zeroLineColor: 'transparent',
            },
            ticks: {
              fontSize: 2,
              fontColor: 'transparent',
            },

          }],
        yAxes: [
          {
            display: false,
            ticks: {
              display: false,
              min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
              max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
            },
          }],
      },
      elements: {
        line: {
          borderWidth: 1,
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4,
        },
      }
    }


    // Card Chart 2
    const cardChartData2 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: brandInfo,
          borderColor: 'rgba(255,255,255,.55)',
          data: [1, 18, 9, 17, 34, 22, 11],
        },
      ],
    };

    const cardChartOpts2 = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips
      },
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: 'transparent',
              zeroLineColor: 'transparent',
            },
            ticks: {
              fontSize: 2,
              fontColor: 'transparent',
            },

          }],
        yAxes: [
          {
            display: false,
            ticks: {
              display: false,
              min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
              max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
            },
          }],
      },
      elements: {
        line: {
          tension: 0.00001,
          borderWidth: 1,
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4,
        },
      },
    };

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">

                <div className="text-value">{Number(this.props.produtos.total).toLocaleString('pt-BR')}</div>
                <div>Produtos cadastrados</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

//export default Dashboard;

function mapStateToProps(state) {
  const { users, authentication, produtos } = state;
  const { user } = authentication;
  return {
    user,
    users, 
    produtos
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadProdutos: (filtros) => dispatch(produtosActions.getProdutos(filtros)),
  }
}
//let connectedHomePage = connect(mapStateToProps)(Dashboard);
//export {connectedHomePage as Dashboard};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
