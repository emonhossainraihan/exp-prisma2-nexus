const { prisma } = require('./common')

function variants(parent, args, context) {
    return prisma.product.findOne({
        where: { id: parent.id }
    }).variants()
}

module.exports = {
    variants
}