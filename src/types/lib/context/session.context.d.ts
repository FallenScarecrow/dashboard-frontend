type TSession = {
  authToken: string;
  displayName: string;
  id: string;
  login: string;
  roles: string[];
};

type TSessionContextData = {
  session: TSession;

  /**
   * @function saveSession
   * Save Session in Local Storage
   * @param session Session in JSON format
   */
  saveSession(session: TSession): void;

  /**
   * @function clearSession
   * Remove Session from Local Storage
   */
  clearSession(): void;
};

type TSessionProviderProps = { children: React.ReactNode };

export { TSession, TSessionContextData, TSessionProviderProps };
