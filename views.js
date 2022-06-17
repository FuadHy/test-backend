/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/
const Employee = require('./employeeModel')

exports.getEmployees = async (req, res) => {
    console.log('eee')
    let employees = await Employee.findAll()
    return res.json({ employees })
}

exports.addEmployee = async (req, res) => {
    const fields = ['first_name', 'last_name', 'age', 'gender', 'height']
    for(field of fields){
        if(
            !Object.keys(req.body || {}).includes(field)
            || !req.body[field]
        ) {
            return res.json({ success: false, msg: `${field} is required!` })
        }
    }
    let created = await Employee.create(req.body)
    return res.json({ succss: true, created })
}

exports.editEmployee = async (req, res) => {
    let id = req.params.id
    if(!id) return res.json({ success: false })
    let updated = await Employee.update(req.body,{
        where: { _id: id }
    })
    return res.json({ success: true })
}

exports.deleteEmployee = async (req, res) => {
    let id = req.params.id
    if(!id) return res.json({ success: false })
    let employee = await Employee.findByPk(id)
    if(!employee) return res.sendStatus(404)
    await employee.destroy()
    return res.json({ success: true })
}