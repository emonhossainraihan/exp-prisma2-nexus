const { prisma } = require('./common')

async function createProduct(parent, args) {

    const product = await prisma.product.create({
        data: {
            ...args
        }
    })
    return product
}

function updateProduct(parent, args) {
    const { id, name } = args
    return prisma.product.update({
        where: { id: parseInt(id) },
        data: {
            name
        }
    })
}

async function deleteProduct(parent, args) {
    const { id } = args
    return prisma.product.delete({
        where: { id: parseInt(id) }
    })
}

async function deleteProducts(parent, args) {
    const { ids } = args
    if (ids.length > 0) {
        await prisma.product.deleteMany({
            where: { id: { in: ids.map(Number) } }
        });
    }
    return 'Batch delete successfully'
}

function createVariant(parent, args) {
    const { id, name } = args

    const variant = prisma.variant.create({
        data: {
            name,
            product: { connect: { id: parseInt(id) } }
        }
    })

    return variant
}
module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    createVariant,
    deleteProducts
}