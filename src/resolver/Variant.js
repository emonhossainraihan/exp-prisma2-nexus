const { prisma } = require('./common')

function product(parent, args, context) {
    return prisma.variant.findOne({
        where: { id: parent.id }
    }).product()
}

module.exports = {
    product
}