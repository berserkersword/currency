import { DataModel } from "../Model/Model"

const Tables = (props: { data: DataModel[], component: boolean }) => {

    let currency = []
    props.component ? currency = props.data.slice(1, 8) : currency = props.data;
    return (
        <div className='w-full py-5 px-auto'>
            <div className="overflow-x-auto mt-5 w-9/12 mx-auto relative shadow-lg sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Volute name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Category
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currency.map(item => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.title}
                                        </th>

                                        <td className="py-4 px-6">
                                            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">{item.code}</span>
                                        </td>
                                        <td className="py-4 px-6">
                                            $ {item.cb_price}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tables