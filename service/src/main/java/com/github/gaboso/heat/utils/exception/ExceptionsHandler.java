package com.github.gaboso.heat.utils.exception;

import lombok.extern.java.Log;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.nio.file.AccessDeniedException;
import java.util.logging.Level;

@Log
@ControllerAdvice
public class ExceptionsHandler {

    @ResponseBody
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ExceptionHandler(AccessDeniedException.class)
    public ExceptionInfo handlerAccessDenied(AccessDeniedException e) {
        log.log(Level.SEVERE, e.getMessage(), e);
        return new ExceptionInfo(e.getMessage());
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(IllegalArgumentException.class)
    public ExceptionInfo handlerIllegalArgument(IllegalArgumentException e) {
        log.log(Level.SEVERE, e.getMessage(), e);
        return new ExceptionInfo(e.getMessage());
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(IllegalStateException.class)
    public ExceptionInfo handlerIllegalState(IllegalStateException e) {
        log.log(Level.SEVERE, e.getMessage(), e);
        return new ExceptionInfo(e.getMessage());
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(Throwable.class)
    public ExceptionInfo handlersThrowable(Throwable e) {
        log.log(Level.SEVERE, e.getMessage(), e);
        return new ExceptionInfo(e.getMessage());
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(GeneralException.class)
    public ExceptionInfo handlerGeneralException(GeneralException e) {
        log.log(Level.SEVERE, e.getMessage(), e);
        return new ExceptionInfo(e.getMessage());
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(NotFoundException.class)
    public ExceptionInfo handlerNotFound(NotFoundException e) {
        log.log(Level.SEVERE, e.getMessage(), e);
        return new ExceptionInfo(e.getMessage());
    }

}
