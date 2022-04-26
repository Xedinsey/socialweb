import React from "react";
import styles from "./Users.module.css";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import userPhoto from "../../assets/images/user_image_mock.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize - 1840)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <>
        <div>
            {pages.map(page => {
                return <Button style = {{margin: "2px"}} className={props.currentPage === page && styles.selectedPage && styles.button}
                               onClick={(e) => {
                                   props.onPageChanged(page)
                               }}>{page}</Button>
            })}
        </div>
        <Container style={{margin: '10px', padding: '5px', maxWidth: '800px', minWidth: '300px'}}>
            <Row md={2} xs={1}>
                {
                    props.users.map(user =>

                        <Col>
                            <Card style={{width: '18rem', margin: '1rem'}}>
                                <NavLink to={'/profile/' + user.id} style={{
                                    width: '10rem',
                                    alignSelf: "center",
                                    paddingTop: '10px'
                                }}>
                                    <Card.Img style={{borderRadius: 100}}
                                        variant="top" src={user.photos.small != null ? user.photos.small : userPhoto}/>
                                </NavLink>
                                <Card.Body>
                                    <Card.Title style={{textAlign: "center"}}>{user.name}</Card.Title>
                                    {user.status ? <Card.Text style={{textAlign: 'center'}}>{user.status}</Card.Text> : undefined }
                                    <Card.Text>{"u.location.country"}<br/>{"u.location.city"}</Card.Text>
                                    <div className="mt-3" style={{display: 'flex', justifyContent: 'center'}}>
                                        {user.followed
                                            ? <Button variant="primary" onClick={() => {
                                                /*axios.post(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                                                    .then(response => {
                                                        this.props.toggleIsFetching(false)
                                                        this.props.setUsers(response.data.items);
                                                        this.props.setTotalUsersCount(response.data.totalCount)
                                                    });*/
                                                props.unfollow(user.id)

                                            }}>UnFollow</Button>
                                            : <Button variant="primary" onClick={() => {
                                                /*axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`)
                                                    .then(response => {
                                                        this.props.toggleIsFetching(false)
                                                        this.props.setUsers(response.data.items);
                                                        this.props.setTotalUsersCount(response.data.totalCount)
                                                    });*/
                                                props.follow(user.id)

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

export default Users;