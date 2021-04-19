package com.github.gaboso.heat.utils.exception;

import lombok.Getter;

@Getter
public class GeneralException extends RuntimeException {

    public GeneralException(String message) {
        super(message);
    }

    public GeneralException(String message, Throwable cause) {
        super(message, cause);
    }

}
