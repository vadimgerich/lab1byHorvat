import Neww from "./model"

const newwControler = {
    //отримати всі
    async get: function (request, response) {
        try {
            const list = await Neww.find(makeQueryObject(req.query));
            response.send(list);
        }
            catch(error){
            response.status(500).send(error);
        }
    
    },
    
    async getByCount(req,res){
        function makeQueryObject(query){
            let result = {};        
            if (query.data){
                result.data = {"$gte":(query.count)};
            }   
            return result; 
        }
        try {
            const list = await Neww.findByData.findByData(makeQueryObject(req.params.count));
            response.send(list);
        }
            catch(error){
            response.status(500).send(error);
        }
    },

    async post (req, res) {
    try {
        const neww = new neww(req.body);
        await neww.save();
        res.send(neww);

        } catch (error) {
        res.status(500).send(error);
        }
    },
    async delete (req, res) {
        try {
            const neww = await Neww.findByIdAndDelete(req.params.id);
            if (!neww)
                res.status(404).send("Not found");
            res.send(neww);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async patch(req, res) {
        try {
            const neww = await Neww.findByIdAndUpdate(req.params.id, req.body,  {new: true});
            if (!neww)
                res.status(404).send("Not found");
            await Neww.save();
            res.send(neww);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default newwControler;