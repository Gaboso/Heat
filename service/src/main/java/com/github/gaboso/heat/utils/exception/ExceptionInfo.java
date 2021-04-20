package com.github.gaboso.heat.utils.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ExceptionInfo {

    private String message;
    private String error;

    public ExceptionInfo(String message) {
        this.message = message;
    }

}
