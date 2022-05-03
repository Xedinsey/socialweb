import React from "react";
import styles from "./Users.module.css";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import userPhoto from "../../assets/images/user_image_mock.png";
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize - 1840)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <>
        <div>
            {pages.map(page => {
                return <Button key={page.id} style={{margin: "2px"}}
                               className={props.currentPage === page && styles.selectedPage && styles.button}
                               onClick={(e) => {
                                   props.onPageChanged(page)
                               }}>{page}</Button>
            })}
        </div>
        <Container style={{margin: '10px', padding: '5px', maxWidth: '800px', minWidth: '300px'}}>
            <Row md={2} xs={1}>
                {
                    props.users.map(user => {
                            return <div key={user.id}>
                                <Col>
                                    <Card style={{width: '18rem', margin: '1rem', boxShadow: '2px 2px 2px gray'}}>
                                        <NavLink to={'/profile/' + user.id} style={{
                                            width: '10rem',
                                            alignSelf: "center",
                                            paddingTop: '10px'
                                        }}>
                                            <Card.Img style={{borderRadius: 100}}
                                                      variant="top"
                                                      src={user.photos.small != null ? user.photos.small : userPhoto}/>
                                        </NavLink>
                                        <Card.Body>
                                            <Card.Title style={{textAlign: "center"}}>{user.name}</Card.Title>
                                            {user.status ?
                                                <Card.Text style={{textAlign: 'center'}}>{user.status}</Card.Text> : undefined}
                                            <Card.Text>{"u.location.country"}<br/>{"u.location.city"}</Card.Text>
                                            <div className="mt-3" style={{display: 'flex', justifyContent: 'center'}}>
                                                {user.followed
                                                    ? <Button disabled={props.followingInProcess.some(id => id === user.id)}
                                                              variant="primary" onClick={() => {
                                                        props.unfollow(user.id)
                                                    }}>UnFollow</Button>
                                                    : <Button disabled={props.followingInProcess.some(id => id === user.id)}
                                                              variant="primary" onClick={() => {
                                                        props.follow(user.id)
                                                    }}>Follow</Button>
                                                }
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>
                        }
                    )
                }
            </Row>
        </Container>
    </>
}

export default Users;