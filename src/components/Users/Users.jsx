import React from 'react';
import * as axios from "axios";
import userPhoto from '../../assets/images/user_image_mock.png';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import styles from './Users.module.css';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    onPageChanged  = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <>
            <div>
                {pages.map(page => {
                    return <Button className={this.props.currentPage === page && styles.selectedPage} onClick={(e) => {
                        this.onPageChanged(page)
                    }}>{page}</Button>
                })}
            </div>
            <Container style={{margin: '10px', padding: '5px', maxWidth: '800px', minWidth: '300px'}}>
                <Row md={2} xs={1}>
                    {
                        this.props.users.map(user =>

                            <Col>
                                <Card style={{width: '18rem', margin: '1rem'}}>
                                    <Card.Img variant="top" style={{
                                        width: '10rem',
                                        alignSelf: "center",
                                        borderRadius: 100,
                                        paddingTop: '10px'
                                    }} src={user.photos.small != null ? user.photos.small : userPhoto}/>
                                    <Card.Body>
                                        <Card.Title style={{textAlign: "center"}}>{user.name}</Card.Title>
                                        <Card className="Text">{user.status}</Card>
                                        <Card className="Text">{"u.location.country"}</Card>
                                        <Card className="Text">{"u.location.city"}</Card>
                                        <div>
                                            {user.followed
                                                ? <Button variant="primary" onClick={() => {
                                                    this.props.unfollow(user.id)
                                                }}>UnFollow</Button>
                                                : <Button variant="primary" onClick={() => {
                                                    this.props.follow(user.id)
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