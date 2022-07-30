import { useState, useEffect } from 'react'
import { TbArrowsRightLeft } from 'react-icons/tb';
import { DataModel } from '../Model/Model';

const Converter = (props: { data: DataModel[] }) => {
    const [secondtDrop, setSecondtDrop] = useState(false)
    const [count, setCount] = useState(1)
    const [result, setResult] = useState('')
    const [secondCode, setSecondCode] = useState<DataModel>({
        title: "UZ",
        code: "UZ",
        cb_price: "1",
        nbu_buy_price: "1",
        nbu_cell_price: "",
        date: `${Date.now}`
    })

    useEffect(() => {

        try {
            setResult(String(count * Number(secondCode.cb_price) / 1000))
        } catch (err) {
            setResult('Please write NUMBER')
        }
    }, [count, secondCode])


    return (
        <div className="pt-20" style={{ minHeight: '100vh' }}>
            <form>
                <div className="mb-4 w-9/12 mx-auto bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                    <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
                        <div className="flex flex-wrap w-full items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                            {/* Indicators */}
                            <div className='mx-auto flex'>
                                <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="opacity-75 stext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"> UZ<svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                            </div>
                            <TbArrowsRightLeft className='mx-auto' />
                            <div className='mx-auto flex'>
                                <button onClick={() => setSecondtDrop(!secondtDrop)} id="dropdownDefault" data-dropdown-toggle="dropdown" className="stext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"> {secondCode.code}<svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                <div id="dropdown" className={`${secondtDrop ? '' : 'hidden'} ml-20 absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}>
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault" style={{ overflowY: 'scroll', maxHeight: '5rem' }}>
                                        {
                                            props.data.map(item => {
                                                return (
                                                    <li onClick={() => { setSecondCode(item); setSecondtDrop(false) }}>
                                                        <p className="block text-gray-900 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item.code}</p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="py-2 px-4 flex bg-white rounded-b-lg dark:bg-gray-800" style={{ border: '1px solid #222' }}>
                        <label htmlFor="editor" className="sr-only">Publish post</label>
                        <textarea
                            id="editor"
                            rows={8}
                            onChange={e => setCount(Number(e.target.value))}
                            className="block  px-0 w-full text-3xl text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                            placeholder="1"
                        >

                        </textarea>
                    </div>
                    <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800" style={{ border: '1px solid #222' }}>
                        <label htmlFor="editor" className="sr-only">Publish post</label>
                        <textarea
                            id="editor"
                            rows={8}
                            value={result}
                            className="block text-3xl  px-0 w-full text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                            placeholder="Write an article..."
                            disabled
                        >

                        </textarea>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Converter