import React from "react";
import PropTypes from "prop-types";

export default function Button({
    type = "submit",
    className,
    variant = "primary",
    processing,
    children,
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`rounded-2xl py-[13px] text-center w-full ${
                processing && "opacity-30"
            } btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    processing: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node,
};
