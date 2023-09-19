const pool = require("../database/index")
const productController = {
    getAll: async (req, res) => {
        try {
            var search = req.query.search;
            const [rows, fields] = await pool.query("SELECT IDProduct,Image,NameProduct,Product.IDCategory,NameCategory, Product.IDSupplier,NameSupplier,Descriptions from Product  INNER JOIN Category ON Product.IDCategory=Category.IDCategory INNER JOIN Supplier ON Product.IDSupplier=Supplier.IDSupplier  where NameProduct LIKE '%"+search+"%' ",[])
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
            const {NameProduct, IDCategory,IDSupplier,Descriptions,Image } = req.body
            const sql = "INSERT INTO Product (NameProduct, IDCategory,IDSupplier,Descriptions,Image) VALUES (?,?,?,?,?)"
            const [rows, fields] = await pool.query(sql, [NameProduct, IDCategory,IDSupplier,Descriptions,Image ])
            res.json({ message: "Create successfully" , status: true });
        } catch (error) {
            console.log(error)
            res.json({ message: "Create fail" , status: false });
        }
    },


    update: async (req, res) => {
        try {
            const { NameProduct, IDCategory,IDSupplier,Descriptions,Image } = req.body
            const id = req.params.id;
            const sql = "UPDATE Product SET NameProduct = ?, IDCategory= ?, IDSupplier= ?,Descriptions= ?, Image=?  WHERE IDProduct = ?"
            const [rows, fields] = await pool.query(sql, [NameProduct, IDCategory,IDSupplier,Descriptions,Image, id])
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

module.exports = productController