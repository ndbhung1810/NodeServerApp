const pool = require("../database/index")
const supplierController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT * from Supplier ");
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
            const {NameSupplier } = req.body
            const sql = "INSERT INTO Supplier (NameSupplier) VALUES (?)"
            const [rows, fields] = await pool.query(sql, [NameSupplier])
            res.json({ message: "Create successfully" , status: true });
        } catch (error) {
            console.log(error)
            res.json({ message: "Create fail" , status: false });
        }
    },


    update: async (req, res) => {
        try {
            const { NameSupplier } = req.body
            const id = req.params.id;
            const sql = "UPDATE Supplier SET NameSupplier = ? WHERE IDSupplier = ?"
            const [rows, fields] = await pool.query(sql, [NameSupplier, id])
            res.json({ message: "Update successfully" , status: true });
        } catch (error) {
            console.log(error)
            res.json({ message: "Update fail" , status: false });
        }
    }, 
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const [rows, fields] = await pool.query("DELETE FROM Supplier WHERE IDSupplier=?", [id])
            res.json({ message: "Delete successfully" , status: true });
        } catch (error) {
            console.log(error)
            res.json({ message: "Delete fail" , status: false });
        }
    }
    

}

module.exports = supplierController