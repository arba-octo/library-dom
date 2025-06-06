import Button from "@mui/material/Button";

function HeaderMenuItem(props) {
    return (
        <Button href={props.href} >{props.name}</Button>
    )
}
export default HeaderMenuItem;