import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
} from "./InfoSectionServices.elements";
import { Button } from "../../globalStyles";

const InfoSection = () => {
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHead>Heading 1</TableHead>
              <TableHead>Heading 2</TableHead>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableHead>data 1</TableHead>
              <TableHead>data 2</TableHead>
            </TableRow>
            <TableRow>
              <TableHead>data 3</TableHead>
              <TableHead>data 4</TableHead>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default InfoSection;
