const orders = [
    {
        date: '2005-09-08',
        subtotal: 90.33,
        items: [
            {
                product: {
                    id: 'redshoe',
                    description: 'Old Red Shoe',
                    price: 66.76
                },
                quantity: 2,
            }
        ]
    }
]

function getAllOrders(){
    return orders;
}

module.exports = {
    getAllOrders,
}