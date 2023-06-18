import { SvgIcon } from '@elementor/ui';

const UndoIcon = React.forwardRef( ( props, ref ) => {
	return (
		<SvgIcon viewBox="0 0 24 24" { ...props } ref={ ref }>
			<path d="M9.53033 6.53033C9.82322 6.23744 9.82322 5.76256 9.53033 5.46967C9.23744 5.17678 8.76256 5.17678 8.46967 5.46967L4.46967 9.46967C4.39776 9.54158 4.34351 9.62445 4.30691 9.71291C4.27024 9.80134 4.25 9.89831 4.25 10C4.25 10.1017 4.27024 10.1987 4.30691 10.2871C4.34351 10.3755 4.39776 10.4584 4.46967 10.5303L8.46967 14.5303C8.76256 14.8232 9.23744 14.8232 9.53033 14.5303C9.82322 14.2374 9.82322 13.7626 9.53033 13.4697L6.81066 10.75H16C16.862 10.75 17.6886 11.0924 18.2981 11.7019C18.9076 12.3114 19.25 13.138 19.25 14C19.25 14.862 18.9076 15.6886 18.2981 16.2981C17.6886 16.9076 16.862 17.25 16 17.25H15C14.5858 17.25 14.25 17.5858 14.25 18C14.25 18.4142 14.5858 18.75 15 18.75H16C17.2598 18.75 18.468 18.2496 19.3588 17.3588C20.2496 16.468 20.75 15.2598 20.75 14C20.75 12.7402 20.2496 11.532 19.3588 10.6412C18.468 9.75044 17.2598 9.25 16 9.25H6.81066L9.53033 6.53033Z" />
		</SvgIcon>
	);
} );

export default UndoIcon;