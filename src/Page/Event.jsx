import React from 'react'

export default function Event() {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Event</th>
                        <th>Contoh</th>
                        <th>Element HTML</th>
                    </tr>
                    <tr>
                        <td>onClick</td>
                        <td><button onClick={(event)=> console.log('onClick')}>onClick</button></td>
                        <td>Semua</td>
                    </tr>
                    <tr>
                        <td>onDoubleClick</td>
                        <td><button onDoubleClick={(event)=> console.log('onDoubleClick')}>onDoubleClick</button></td>
                        <td>Semua</td>
                    </tr>
                    <tr>
                        <td>onDragStart</td>
                        <td><input type="text" onDragStart={(event)=> console.log('onDragStart')} defaultValue='onDragStart'/></td>
                        <td>Semua</td>
                    </tr>
                    <tr>
                        <td>onDrop</td>
                        <td><input type="text" onDrop={(event)=> console.log('onDrop')} defaultValue='onDrop'/></td>
                        <td>Semua</td>
                    </tr>
                    <tr>
                        <td>onKey</td>
                        <td><input type="text" 
                                onKeyDown={(event)=> console.log('onKeyDown')} 
                                onKeyUp={(event)=> console.log('onKeyUp')}
                                onKeyPress={(event)=> console.log('onKeyPress')}
                                defaultValue='onKey'/>
                        </td>
                        <td>input, textarea , select , button </td>
                    </tr>
                    <tr>
                        <td>onFocus, onBlur, onSelect</td>
                        <td><input type="text" 
                                onFocus={(event)=> console.log('onFocus')} 
                                onBlur={(event)=> console.log('onBlur')}
                                onSelect={(event)=> console.log('onSelect')}
                                defaultValue=''/>
                        </td>
                        <td>input, textarea , select , button </td>
                    </tr>
                    <tr>
                        <td>onChange</td>
                        <td>
                            <input type="text" onChange={(event)=> console.log('onChange')}  defaultValue='onChange'/>
                            <br />
                            <input type="radio" name="gender" onChange={(event)=> console.log('1')} value='1'/>Pria
                            <input type="radio" name="gender" onChange={(event)=> console.log('2')} value='2'/>Wanita
                            <br />
                            <select name="nilai" id="nilai" onChange={(event)=> console.log('onChange')}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </td>
                        <td>input, textarea , select , button </td>
                    </tr>
                    <tr>
                        <td>onCopy, onCut, onPaste</td>
                        <td><input type="text" 
                                onCopy={(event)=> console.log('onCopy')} 
                                onCut={(event)=> console.log('onCut')}
                                onPaste={(event)=> console.log('onPaste')}
                                defaultValue='clipboard'/>
                        </td>
                        <td>Semua</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
