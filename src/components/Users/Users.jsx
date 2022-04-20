import React from 'react';
import * as axios from "axios";
import userPhoto from '../../assets/images/user_image_mock.png';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

//  Функция запроса пользователей на сервер
    getUsers = () => {

    }

    render() {
        return <>
            <Button onClick={this.getUsers} style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                display: this.props.users.length === 0 ? 'block' : 'none'
            }}>Get Users</Button>

            <Container style={{margin: '10px', padding: '5px', maxWidth: '800px', minWidth: '300px'}}>
                <Row md={2} xs={1}>
                    {
                        this.props.users.map(u =>

                            <Col>
                                <Card style={{width: '18rem', margin: '1rem'}}>
                                    <Card.Img variant="top" style={{
                                        width: '10rem',
                                        alignSelf: "center",
                                        borderRadius: 100,
                                        paddingTop: '10px'
                                    }} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                    <Card.Body>
                                        <Card.Title style={{textAlign: "center"}}>{u.name}</Card.Title>
                                        <Card className="Text">{u.status}</Card>
                                        <Card className="Text">{"u.location.country"}</Card>
                                        <Card className="Text">{"u.location.city"}</Card>
                                        <div>
                                            {u.followed
                                                ? <Button variant="primary" onClick={() => {
                                                    this.props.unfollow(u.id)
                                                }}>UnFollow</Button>
                                                : <Button variant="primary" onClick={() => {
                                                    this.props.follow(u.id)
                                                }}>Follow</Button>
                                            }
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </>
    }
}

export default Users;