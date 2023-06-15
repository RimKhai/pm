import React from "react"
import CustomInputfield from "../shared/customInputfield/CustomInputfield"
import BaseButton from "../shared/baseButton/BaseButton"

const ConfigForm = () => {
    return (
        <div className='flex flex-col items-center space-y-4 mt-14'>
            <CustomInputfield
                label='endpoint'
                styles={{ width: "300px" }}
            />
            <CustomInputfield
                label='user'
                styles={{ width: "300px" }}
            />
            <CustomInputfield
                label='password'
                styles={{ width: "300px" }}
            />
            <CustomInputfield
                label='bucket'
                styles={{ width: "300px" }}
            />
            <BaseButton
                label='Submit'
                styles={{ width: "300px" }}
            />
        </div>
    )
}

export default ConfigForm
