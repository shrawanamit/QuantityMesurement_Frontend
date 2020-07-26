import axios from 'axios';

const apiUrl = 'https://localhost:44320/api/QM';

class Service {

    //API calling for get all history 
    history() {
        console.log(" get in axios service ");
    return   axios.get(apiUrl);
    }
    //API calling for delete data by ID
    delete(Id){
        console.log(" Id in axios service ",Id);
    return   axios.delete(apiUrl+"/"+Id);
    }
    optiontype(data){
        console.log(" Id in axios service ",data);
    return   axios.post(apiUrl,data);
    }
}
export default Service;