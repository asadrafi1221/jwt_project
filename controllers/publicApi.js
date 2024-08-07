

const publicApi = async (req, res, next) => {
    try {
        return res.status(200).json("This is the public api");
    } catch (error) {
        next(error)
    }
}
export default publicApi;