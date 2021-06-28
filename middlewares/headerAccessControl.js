const headerAccessControl = (request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
};

export default headerAccessControl;