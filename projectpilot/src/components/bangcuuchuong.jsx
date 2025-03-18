const BangCuuChuong = ({so}) => {
    return (
        <div>
            <h2>
                Bảng cửu chương {so}
            </h2>
        </div>
    )
}

const Display = ({props}) =>{
    let students = [{id: '48.01.104.080', name: 'Long'}, {id: '48.01.104.081', name: 'Long 2'}]
    return <div>
        {students.map((student, index) => {
            return <div key={index}>
                <h1>{props.classId}</h1>
                <p>{student.id}, {student.name}</p>
            </div>
        })}
    </div>
}

export default Display;