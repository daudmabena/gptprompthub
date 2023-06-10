import React from 'react';

const ModalSm = (props) => {
    return (
        <>
            {props.show &&
                <div id="defaultModal" tabIndex="-1" aria-hidden="true"
                     className="fixed top-0 left-0 right-0 z-50 bg-blue-gray-900/50 w-full p-4 overflow-x-hidden flex items-center justify-center overflow-y-auto md:inset-0 h-[100%] max-h-full">
                    <div className="relative w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div
                                className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {props.modalTitle}
                                </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                    <span>Close</span>
                                </button>
                            </div>
                            <div className="p-6 space-y-6">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    With less than a month to go before the European Union enacts new consumer privacy
                                    for its citizens, companies around the world are updating their terms of service
                                    agreements to comply.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default ModalSm;
