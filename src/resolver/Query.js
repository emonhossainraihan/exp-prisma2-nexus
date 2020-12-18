const { prisma } = require('./common')


function products(parent, args) {
    return prisma.product.findMany()
}

function productById(parent, args) {
    const { id } = args
    return prisma.product.find({
        where: { id: id }
    })
}

function variants(parent, args) {
    return prisma.variant.findMany()
}

function variantById(parent, args) {
    const { id } = args
    return prisma.variant.find({
        where: { id: id }
    })
}

module.exports = {
    products,
    productById,
    variants,
    variantById
}
