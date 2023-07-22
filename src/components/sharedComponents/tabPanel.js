export default function TabPanel(props) {
    const { children, value, index, styleClass } = props;
    return (
        <div
            hidden={value !== index}
            className={styleClass}
        >
            {children}
        </div>
    )
}