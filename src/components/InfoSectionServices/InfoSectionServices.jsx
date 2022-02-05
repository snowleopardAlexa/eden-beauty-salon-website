import {
  TableContainer,
  Table,
  TableTitle,
  TableSubtitle,
  Divider,
  TableHead,
  TableRow,
  TableBody,
  TableDataCell,
} from "./InfoSectionServices.elements";
import { Button } from "../../globalStyles";

const InfoSection = () => {
  return (
    <>
      <TableContainer>
        <Table>
        <TableBody>
          <TableTitle>
            Services
          </TableTitle>
          <TableSubtitle>Haircuts</TableSubtitle>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Artist</TableHead>
              <TableHead>Contact</TableHead>
            </TableRow>
            <TableRow>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
            </TableRow>
            <TableSubtitle>Makeups</TableSubtitle>
            <TableRow>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
              <TableDataCell>Data</TableDataCell>
            </TableRow>
            </TableBody>
        </Table>
      </TableContainer>
      <Button>Come back</Button>
    </>
  );
};

export default InfoSection;
