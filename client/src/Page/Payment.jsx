import React, {Component} from 'react';
import { Container, Row, Alert, Col, Form, Button} from 'react-bootstrap';
import Header from './../Components/Header.jsx';import { connect } from "react-redux";
import { postTransaction } from "../redux/actions/actionTransaksi";

class Message extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            this.props.status === true ? (
                <Alert key={1} variant={'success'} style={{width:360}}>
                   Transaksi anda berhasil, segera akan kami proses. -Terima Kasih-
                 </Alert>
             ):(
                <Alert key={1} variant={'danger'} style={{width:360}}>
                 Transaksi anda gagal, silahkan unggah ulang. -Terima Kasih-
                </Alert>
               
             )
        )
    }
}

class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
          kirim:false,
          status:false,
          datas: null,
        };
    }
         
    handleChange = (event) => {
        // const { datas } = this.state;
        
        // this.setState({
        //   datas: { ...datas, [event.target.name]: event.target.value },
        // });

        event.preventDefault();
        var file = this.refs.file.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            this.setState({
                file: [reader.result],
                datas: { attache: file },
            });
        };
    };
    
    handleSubmit = async (event) => {
        event.preventDefault();
		this.setState({kirim:true});
        this.props.postTransaction(this.state.datas);
        this.setState({ datas: {} });
    };

    render(){
        const {data, loading, error} = this.props;
        return(
            <>
				<Header />
                <Container style={{textAlign:'center', height:'794px'}}>
                    <div className="payment-form" style={{paddingTop:'100px'}}>
                        <div className="box-header with-border">
                            <h3 className="box-title">Premium</h3>
                        </div>
                        <Row>
                            <Col md={12}>
                                <div className="deskripsi-pay">
                                    <p>Bayar sekarang dan nikmatin streaming music yang kekinian di <span style={{color:'#F58033',fontWeight:'bold'}}>DUMB<span style={{color:'#FFFFFF'}}>SOUND</span></span></p>
                                    <p><span style={{color:'#F58033',fontWeight:'bold'}}>DUMB<span style={{color:'#FFFFFF'}}>SOUND</span></span><span style={{fontWeight:'bold'}}>  : 0981312323</span></p>
                                </div>
                            </Col>
                            <Col md={6} style={{marginLeft:'25%'}}>
                                <div className="form-kirim">  
								<Form onSubmit={this.handleSubmit} method="post">
									<Form.Group style={{width:'50%',marginLeft:'25%',marginRight:'25%'}}  className="inputan">
										<Form.Control type="text" name="account"  placeholder="input your account number" required/>
									</Form.Group>
                                    <Form.Group className="form-group fileUpload" style={{width:'50%',marginLeft:'25%', textAlign:'left',marginRight:'25%',background: '#FFFFFF',border: '2px solid #FFFFFF',boxSizing: 'border-box',borderRadius: '5px', color:'red'}}>
                                        <label className="form-control-file font-weight-bold" style={{width:'80%',marginLeft:'10%',marginRight:'10%'}} required>Attache poof of transfer<span className="pull-right font-weight-bold"><i className="fa fa-paperclip"></i></span></label>
                                        <input type="file" name="attache" ref="file" className="upload" onChange={this.handleChange} required/>
                                    </Form.Group>
									<Button className="btn btn-lg btn-warning" type="submit" style={{width:'50%',color:'#FFFFFF',background:'#F58033'}} role="button">Kirim</Button>
								</Form>
							   </div>
                            </Col>
                            <Col md={12} style={{marginLeft:'33%', marginTop:20}}>
                                {
                                    loading ? (
                                        <h1>{loading}</h1>
                                    ) : error ? (
                                        <Message status={false} />
                                    ) : data.id ? (
                                        <Message status={true} />
                                    ) : (
                                        null 
                                    )
                                }
                            </Col>
                        </Row>
                    </div>
                </Container>
            </>
        );
    }
} 

const mapStateToProps = (state) => {
    const { data, loading, error } = state.transaksi;
    return {
      data,
      loading,
      error,
    };
  };

export default connect(mapStateToProps, { postTransaction })(Payment);