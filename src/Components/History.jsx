import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import "../SCSS/History.scss";
//impoting the service class
import historyService from '../Services/Service'
//object of  historyService
let service = new historyService();


export default class History extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            History: [],
            SnackbarOpen: false,
            SnackbarMessage: '',

        };
    }
    //for fetching Employee list from database
    componentDidMount() {
        this.history();
    }

    SnackbarClose = (event) => {
        this.setState({ SnackbarOpen: false });
    }

    history = () => {
        service.history().then((data) => {
            console.log(" All historyfound ", data.data.data);
            this.setState({ History: data.data.data });
            console.log("History Array", this.state.History);
        }).catch((err) => {
            console.log(err);

        })
    }

    delete = (Id) => {
        console.log("Delete Id", Id);
        service.delete(Id).then((json) => {
            console.log("responce data==>", json);
            if (json.data.success === 'True') {
                //alert('Record deleted successfully!!');
                this.setState({ SnackbarOpen: true, SnackbarMessage: 'Record deleted successfully!!' })
            }
        })
    }

    render() {


        return (
            <div class="tableBody">
                <Snackbar
                    anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
                    open={this.state.SnackbarOpen}
                    autoHideDuration={3000}
                    onClose={this.SnackbarClose}
                    message={<span id="message-id">{this.state.SnackbarMessage}</span>}
                    action={[
                        <IconButton key="close" aria-label="close"
                            color="inherit" onClick={this.SnackbarClose}>x</IconButton>
                    ]}
                />
                <div class="history"><p>HISTORY TABLE</p></div>
                <div class="table">
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="right">OPTION_TYPE</TableCell>
                                    <TableCell align="right">INPUT</TableCell>
                                    <TableCell align="right">OUTPUT</TableCell>
                                    <TableCell align="right">CREATION_DATE</TableCell>
                                    <TableCell align="right">DELETE</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.History.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell component="th" scope="row">
                                                {row.id}
                                            </TableCell>
                                            <TableCell align="right">{row.conversionType}</TableCell>
                                            <TableCell align="right">{row.value}</TableCell>
                                            <TableCell align="right">{row.result}</TableCell>
                                            <TableCell align="right">{row.dateOFCreation}</TableCell>
                                            <TableCell align="right">
                                                <Button variant="contained" onClick={() => this.delete(row.id)} color="primary" startIcon={<DeleteIcon />}>
                                                    Delete
                                         </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        );
    }
}