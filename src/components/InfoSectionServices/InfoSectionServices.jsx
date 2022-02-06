import {
  TableContainer,
  Table,
  TableTitle,
  TableSubtitle,
  TableHead,
  TableRow,
  TableBody,
  TableDataCell,
} from "./InfoSectionServices.elements";
//import { Button } from "../../globalStyles";

const InfoSection = ({ fontWeight }) => {
  return (
    <>
      <TableContainer>
        <Table>
          <TableBody>
            <TableTitle>Services</TableTitle>
            <TableSubtitle>Haircuts</TableSubtitle>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Artist</TableHead>
              <TableHead>Contact</TableHead>
            </TableRow>
            <TableRow>
              <TableDataCell fontWeight={fontWeight}>Creative Haircut</TableDataCell>
              <TableDataCell>1-3h</TableDataCell>
              <TableDataCell>$200-300</TableDataCell>
              <TableDataCell>Lara Jameson</TableDataCell>
              <TableDataCell>+1 646-758-9876</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell fontWeight={fontWeight}>Advanced Haircut</TableDataCell>
              <TableDataCell>1-2h</TableDataCell>
              <TableDataCell>$100-200</TableDataCell>
              <TableDataCell>Luisa DeSouza</TableDataCell>
              <TableDataCell>+1 646-888-9876</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell fontWeight={fontWeight}>Salon Haircut</TableDataCell>
              <TableDataCell>30min-1h</TableDataCell>
              <TableDataCell>$50-100</TableDataCell>
              <TableDataCell>Brandon Spark</TableDataCell>
              <TableDataCell>+1 646-758-3456</TableDataCell>
            </TableRow>
            <TableSubtitle>Makeups</TableSubtitle>
            <TableRow>
              <TableDataCell fontWeight={fontWeight}>Halloween Makeup</TableDataCell>
              <TableDataCell>2-4h</TableDataCell>
              <TableDataCell>300$</TableDataCell>
              <TableDataCell>Katherine Duva</TableDataCell>
              <TableDataCell>+1 567-867-0987</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell fontWeight={fontWeight}>Bridal Makeup</TableDataCell>
              <TableDataCell>2-3h</TableDataCell>
              <TableDataCell>200$</TableDataCell>
              <TableDataCell>Misha Pavlovic</TableDataCell>
              <TableDataCell>+1 675-867-3487</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell fontWeight={fontWeight}>New Years Makeup</TableDataCell>
              <TableDataCell>1-2h</TableDataCell>
              <TableDataCell>100$</TableDataCell>
              <TableDataCell>Agnieszka Kukulska</TableDataCell>
              <TableDataCell>+1 234-777-0987</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell fontWeight={fontWeight}>Standard Makeup</TableDataCell>
              <TableDataCell>1h</TableDataCell>
              <TableDataCell>50$</TableDataCell>
              <TableDataCell>Surendra Singh</TableDataCell>
              <TableDataCell>+1 888-465-0098</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell fontWeight={fontWeight}>Office Makeup</TableDataCell>
              <TableDataCell>30min-1h</TableDataCell>
              <TableDataCell>50$</TableDataCell>
              <TableDataCell>Surendra Singh</TableDataCell>
              <TableDataCell>+1 888-465-0098</TableDataCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default InfoSection;
