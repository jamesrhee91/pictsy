import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import Visibility from 'material-ui/svg-icons/action/visibility'
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off'


const FilterButton = ({ filterImages }) => {

  return (
    <Checkbox
        checkedIcon={<Visibility />}
        uncheckedIcon={<VisibilityOff />}
        onCheck={() => filterImages()}
        label="NSFW"
        style={{marginTop: "1vh", width: "none"}}
      />
  )
}

export default FilterButton
