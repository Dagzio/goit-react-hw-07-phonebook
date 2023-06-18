export const fetchHandlePending = state => {
  state.contacts.isLoading = true;
};

export const fetchHandleFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = payload;
};

export const fetchHandleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

export const contactHandleAdd = (state, { payload }) => {
  state.contacts.items.push({
    id: payload.id,
    name: payload.name,
    phone: payload.phone,
  });
};

export const contactHandleDelete = (state, { payload }) => {
  const filterValueId = state.contacts.items.findIndex(
    contact => contact.id === payload.id
  );
  state.contacts.items.splice(filterValueId, 1);
};

export const filterHandleUpdate = (state, { payload }) => {
  state.filter = payload;
};
