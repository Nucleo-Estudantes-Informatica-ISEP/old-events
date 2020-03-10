/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardImg,
    CardTitle,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
    Row
} from "reactstrap";

// core components

class SectionRegister extends React.Component {
    state = {
        squares1to6: "",
        squares7and8: ""
    };
    componentDidMount() {
        document.body.classList.toggle("register-page");
        document.documentElement.addEventListener("mousemove", this.followCursor);
    }
    componentWillUnmount() {
        document.body.classList.toggle("register-page");
        document.documentElement.removeEventListener(
            "mousemove",
            this.followCursor
        );
    }
    followCursor = event => {
        let posX = event.clientX - window.innerWidth / 2;
        let posY = event.clientY - window.innerWidth / 6;
        this.setState({
            squares1to6:
                "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)",
            squares7and8:
                "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)"
        });
    };
    render() {
        return (
            <>
                <div className="wrapper">
                    <div className="page-header">
                        <div className="page-header-image" />
                        <div className="content">
                            <Container style={{paddingTop: "0px"}}>
                                <Row>
                                    <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                                        <div
                                            className="square square-7"
                                            id="square7"
                                            style={{ transform: this.state.squares7and8 }}
                                        />
                                        <div
                                            className="square square-8"
                                            id="square8"
                                            style={{ transform: this.state.squares7and8 }}
                                        />
                                        <Card className="card-register">
                                            <CardHeader>
                                                <CardImg
                                                    alt="..."
                                                    src={require("assets/img/square-purple-1.png")}
                                                />
                                                <CardTitle tag="h4" style={{color: "white"}}>Registo</CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                                <Form className="form">
                                                    <InputGroup
                                                        className={classnames({
                                                            "input-group-focus": this.state.fullNameFocus
                                                        })}
                                                    >
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="tim-icons icon-single-02" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            placeholder="Nome completo"
                                                            type="text"
                                                            onFocus={e =>
                                                                this.setState({ fullNameFocus: true })
                                                            }
                                                            onBlur={e =>
                                                                this.setState({ fullNameFocus: false })
                                                            }
                                                        />
                                                    </InputGroup>
                                                    <InputGroup
                                                        className={classnames({
                                                            "input-group-focus": this.state.emailFocus
                                                        })}
                                                    >
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="tim-icons icon-email-85" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            placeholder="Email"
                                                            type="text"
                                                            onFocus={e => this.setState({ emailFocus: true })}
                                                            onBlur={e => this.setState({ emailFocus: false })}
                                                        />
                                                    </InputGroup>
                                                    <InputGroup
                                                        className={classnames({
                                                            "input-group-focus": this.state.passwordFocus
                                                        })}
                                                    >
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="tim-icons icon-lock-circle" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            placeholder="Password"
                                                            type="text"
                                                            onFocus={e =>
                                                                this.setState({ passwordFocus: true })
                                                            }
                                                            onBlur={e =>
                                                                this.setState({ passwordFocus: false })
                                                            }
                                                        />
                                                    </InputGroup>
                                                    <InputGroup
                                                        className={classnames({
                                                            "input-group-focus": this.state.passwordFocus
                                                        })}
                                                    >
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="tim-icons icon-lock-circle" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            placeholder="Repetir password"
                                                            type="text"
                                                            onFocus={e =>
                                                                this.setState({ passwordFocus: true })
                                                            }
                                                            onBlur={e =>
                                                                this.setState({ passwordFocus: false })
                                                            }
                                                        />
                                                    </InputGroup>
                                                    <FormGroup check className="text-left">
                                                        <Label check>
                                                            <Input type="checkbox" />
                                                            <span className="form-check-sign" />Eu concordo com{" "}
                                                            <a
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                termos e condições
                                                            </a>
                                                            .
                                                        </Label>
                                                    </FormGroup>
                                                </Form>
                                            </CardBody>
                                            <CardFooter style={{textAlign: "center"}}>
                                                <Button className="btn-round" color="primary" size="lg">
                                                    Registar
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                </Row>
                                <div className="register-bg" />
                                <div
                                    className="square square-1"
                                    id="square1"
                                    style={{ transform: this.state.squares1to6 }}
                                />
                                <div
                                    className="square square-2"
                                    id="square2"
                                    style={{ transform: this.state.squares1to6 }}
                                />
                                <div
                                    className="square square-4"
                                    id="square4"
                                    style={{ transform: this.state.squares1to6 }}
                                />
                                <div
                                    className="square square-5"
                                    id="square5"
                                    style={{ transform: this.state.squares1to6 }}
                                />
                                <div
                                    className="square square-6"
                                    id="square6"
                                    style={{ transform: this.state.squares1to6 }}
                                />
                            </Container>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SectionRegister;
