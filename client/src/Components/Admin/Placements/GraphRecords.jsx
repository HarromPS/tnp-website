import React, { useEffect, useContext, useState, useRef } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare,
    faTrash
} from "@fortawesome/free-solid-svg-icons";


// context api
import { AdminContext } from "../../../App";

export const GraphRecords = () => {
    const graphContext = useContext(AdminContext);
    const [graphTempData, setTempGraphData] = useState([]);

    // ref a dom element
    let launch = useRef();
    let btnRef = useRef();

    const { getGraphAlldetails, createGraphRecord, editGraphRecord, deleteGraphRecord } = graphContext;
    const [show, setShow] = useState(false);
    const [prevYear, setPrevYear] = useState("");

    const [graphData, setGraphData] = useState({
        Year: "",
        UnderGraduate: 0,
        PostGraduate: 0,
        Total: 0,
    });

    const handleSubmitEdit = () => {
        // request function to edit the record
        editGraphRecord(prevYear, graphData);
        setShow(false);
    }
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    const addARecord = (event) => {
        event.preventDefault();

        // create a new record in graph collection
        createGraphRecord(graphData);
        let ele = document.getElementsByClassName("inpts");
        Array.from(ele).forEach((item) => {
            item.value = null;
        });
    }

    const onChange = (event) => {
        setGraphData({
            ...graphData,
            [event.target.getAttribute('name')]: event.target.value
        });
    }

    const refreshPage = async () => {
        btnRef.current.click();
        getGraphAlldetails().then((data) => setTempGraphData(data));
    }

    useEffect(() => {
        getGraphAlldetails().then((data) => setTempGraphData(data));
    }, []);

    return (
        <>
            <Button ref={launch} style={{ display: "none" }} variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit the Record</Modal.Title></Modal.Header>
                <Form.Text className="text-muted container">
                    Previous Records are given in light text
                </Form.Text>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3 container my-3" controlId="Year">
                            <Form.Label>Year</Form.Label>
                            <Form.Control className="inpts" type="text" placeholder={graphData.Year} onChange={onChange} name={'Year'} />
                        </Form.Group>

                        <Form.Group className="mb-3 container my-3" controlId="UnderGraduate">
                            <Form.Label>Under Graduate</Form.Label>
                            <Form.Control className="inpts" type="number" placeholder={graphData.UnderGraduate} onChange={onChange} name={'UnderGraduate'} />
                        </Form.Group>
                        <Form.Group className="mb-3 container my-3" controlId="PostGraduate">
                            <Form.Label>Post Graduate</Form.Label>
                            <Form.Control className="inpts" type="number" placeholder={graphData.PostGraduate} onChange={onChange} name={"PostGraduate"} />
                        </Form.Group>
                        <Form.Group className="mb-3 container my-3" controlId="Total">
                            <Form.Label>Total</Form.Label>
                            <Form.Control className="inpts" type="number" placeholder={graphData.Total} onChange={onChange} name={"Total"} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmitEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


            <Table striped bordered hover className='container' responsive="lg" size="sm">
                <thead>
                    <tr style={{ textAlign: "center" }}>
                        {/* <th>Sr No.</th> */}
                        <th >Year</th>
                        <th>Under Graduate</th>
                        <th>Post Graduate</th>
                        <th>Total</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        graphTempData.reverse().map((data) => {
                            return (
                                <>
                                    <tr key={data.dataKey}>
                                        <td>{data["year"]}</td>
                                        <td>{data["Under Graduate"]}</td>
                                        <td>{data["Post Graduate"]}</td>
                                        <td>{data["Total"]}</td>
                                        <td><FontAwesomeIcon className='icons' icon={faPenToSquare} onClick={() => {
                                            launch.current.click();
                                            setGraphData({
                                                Year: data["year"],
                                                UnderGraduate: data["Under Graduate"],
                                                PostGraduate: data["Post Graduate"],
                                                Total: data["Total"]
                                            });
                                            setPrevYear(data['year']);
                                        }} /></td>
                                        <td><FontAwesomeIcon className='icons' icon={faTrash} onClick={() => {
                                            // console.log(data['year']);
                                            deleteGraphRecord(data['year']);
                                            // console.log(data);
                                            refreshPage();
                                        }} /></td>

                                    </tr>
                                </>
                            );
                        })
                    }
                </tbody>
                <Button ref={btnRef} Button variant="dark" className='justify-content-center container md-3 my-3' onClick={refreshPage}>
                    Refresh
                </Button>
            </Table>

            {/* form to add a nwe record */}
            <Form>
                <hr />
                <h2 className="container my-3">Add Records for Graph Here</h2>
                <Form.Group className="mb-3 container my-3" controlId="Year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control className="inpts" type="text" placeholder="e.g AY 23-24" onChange={onChange} name={'Year'} />
                </Form.Group>

                <Form.Group className="mb-3 container my-3" controlId="UnderGraduate">
                    <Form.Label>Under Graduate</Form.Label>
                    <Form.Control className="inpts" type="number" placeholder="e.g 412" onChange={onChange} name={'UnderGraduate'} />
                </Form.Group>
                <Form.Group className="mb-3 container my-3" controlId="PostGraduate">
                    <Form.Label>Post Graduate</Form.Label>
                    <Form.Control className="inpts" type="number" placeholder="e.g 123" onChange={onChange} name={"PostGraduate"} />
                </Form.Group>
                <Form.Group className="mb-3 container my-3" controlId="Total">
                    <Form.Label>Total</Form.Label>
                    <Form.Control className="inpts" type="number" placeholder="e.g 535" onChange={onChange} name={"Total"} />
                </Form.Group>

                <Form.Group className="mb-3 container my-3" controlId="Year">
                    <Button variant="primary text-center" type="submit" onClick={addARecord}>
                        Add
                    </Button>
                </Form.Group>
            </Form>
        </>
    )
}
