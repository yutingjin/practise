export default {
    OK: 1,
    FAIL: 0,
    NO_SLOT: 2,
    RETRY: 2,
    TIMEOUT: 3,
    DEVICE_IN_USE: 4,
    NOT_BIND_CARD: 5,
    CARD_INVALID: 6,
    HAS_UNFINISHED_ORDER: 7,
    HAS_EXCEPTION_ORDER: 8,
    SERVER_ERROR: 500,
    LOGIN_ERROR: 406
};

export const errorCodes = {
    REPORT_LOSS: '108',
    OVER_DUE: '109'
};

export const orderStatuses = {
    IN_PROGRESS: 0,
    FINISHED: 1,
    EXCEPTION: -100
};

export const orderSteps = {
    BORROWED: 'borrowed',
    RETURNED:'returned',
    FINISHED: 'finished'
};

export const paymentStatuses = {
    IN_PROGRESS: 1,
    COMPLETE: 2,
    SOFT_FAIL: 3,
    HARD_FAIL: 4
};