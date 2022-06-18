import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from '@material-tailwind/react'
import React from 'react'

const ListSkills = () => {
  const [open, setOpen] = React.useState(0)

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value)
  }
  return (
    <>
      <Accordion open={open === 1} onClick={() => handleOpen(1)}>
        <AccordionHeader>Programming languages</AccordionHeader>
        <AccordionBody>TEST</AccordionBody>
      </Accordion>
      <Accordion open={open === 2} onClick={() => handleOpen(2)}>
        <AccordionHeader>Hard Skills</AccordionHeader>
        <AccordionBody>TEST</AccordionBody>
      </Accordion>
      <Accordion open={open === 3} onClick={() => handleOpen(3)}>
        <AccordionHeader>Soft Skills</AccordionHeader>
        <AccordionBody>TEST</AccordionBody>
      </Accordion>
    </>
  )
}

export default ListSkills
