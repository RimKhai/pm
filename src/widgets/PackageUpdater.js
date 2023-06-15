import { React, useState } from "react"
import CustomInputfield from "../shared/customInputfield/CustomInputfield"
import BaseButton from "../shared/baseButton/BaseButton"

const PackageUpdater = () => {
    const [packages, setPackages] = useState([])
    return (
        <div className='flex flex-col items-center space-y-4 mt-14'>
            <h1 className=''>Packages</h1>
            {packages.map((item, index) => (
                <div className='flex items-center justify-center space-x-4 '>
                    <p>{index + 1} :</p>
                    <CustomInputfield
                        label='Name'
                        styles={{ width: "200px" }}
                    />
                    <CustomInputfield
                        label='Version'
                        styles={{ width: "200px" }}
                    />
                    <BaseButton
                        label='✖'
                        onClickAction={() =>
                            setPackages(
                                packages.filter((element) => item !== element)
                            )
                        }
                    />
                </div>
            ))}
            <BaseButton
                label='+'
                onClickAction={() =>
                    setPackages([...packages, packages.length + 1])
                }
            />
            <BaseButton
                label='Submit'
                styles={{ width: "300px" }}
            />
        </div>
    )
}

export default PackageUpdater
