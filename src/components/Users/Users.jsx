import React from "react";
import styles from "./Users.module.css";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import userPhoto from "../../assets/images/user_image_mock.png";


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
                                <Card.Img variant="top" style={{
                                    width: '10rem',
                                    alignSelf: "center",
                                    borderRadius: 100,
                                    paddingTop: '10px'
                                }} src={user.photos.small != null ? user.photos.small : userPhoto}/>
                                <Card.Body>
                                    <Card.Title style={{textAlign: "center"}}>{user.name}</Card.Title>
                                    <Card.Text>{user.status}<br/>
                                        {"u.location.country"}<br/>
                                        {"u.location.city"}
                                    </Card.Text>
                                    <div className="mt-3" style={{display: 'flex', justifyContent: 'center'}}>
                                        {user.followed
                                            ? <Button variant="primary" onClick={() => {
                                                props.unfollow(user.id)
                                            }}>UnFollow</Button>
                                            : <Button variant="primary" onClick={() => {
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