const pool = require("../database/index")
const categoryController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT * from Category ");
            res.json({
                data: rows,
                status:true
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: false
            })
        }
    },


    create: async (req, res) => {
        try {
            const {NameCategory } = req.body
            const sql = "INSERT INTO Category (NameCategory) VALUES (?)"
            const [rows, fields] = await pool.query(sql, [NameCategory])
            res.json({ message: "Create successfully" , status: true });
        } catch (error) {
            console.log(error)
            res.json({ message: "Create fail" , status: false });
        }
    },


    update: async (req, res) => {
        try {
            const { NameCategory } = req.body
            const id = req.params.id;
            const sql = "UPDATE Category SET NameCategory = ? WHERE IDCategory = ?"
            const [rows, fields] = await pool.query(sql, [NameCategory, id])
            res.json({ message: "Update successfully" , status: true });
        } catch (error) {
            console.log(error)
            res.json({ message: "Update fail" , status: false });
        }
    }, 
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const [rows, fields] = await pool.query("DELETE FROM Category WHERE IDCategory=?", [id])
            res.json({ message: "Delete successfully" , status: true });
        } catch (error) {
            console.log(error)
            res.json({ message: "Delete fail" , status: false });
        }
    }
    

}

module.exports = categoryController