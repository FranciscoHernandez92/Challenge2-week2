export const calculateToUpperCase = (str) => {
  let result = '';
  let round = 0;
  while (str[round]) {
    if (str[round] === 'a') {
      result += 'A';
    } else if (str[round] === 'b') {
      result += 'B';
    } else if (str[round] === 'c') {
      result += 'C';
    } else if (str[round] === 'd') {
      result += 'D';
    } else if (str[round] === 'e') {
      result += 'E';
    } else if (str[round] === 'f') {
      result += 'F';
    } else if (str[round] === 'g') {
      result += 'G';
    } else if (str[round] === 'h') {
      result += 'H';
    } else if (str[round] === 'i') {
      result += 'I';
    } else if (str[round] === 'j') {
      result += 'J';
    } else if (str[round] === 'k') {
      result += 'K';
    } else if (str[round] === 'l') {
      result += 'L';
    } else if (str[round] === 'm') {
      result += 'M';
    } else if (str[round] === 'n') {
      result += 'N';
    } else if (str[round] === 'o') {
      result += 'O';
    } else if (str[round] === 'p') {
      result += 'P';
    } else if (str[round] === 'q') {
      result += 'Q';
    } else if (str[round] === 'r') {
      result += 'R';
    } else if (str[round] === 's') {
      result += 'S';
    } else if (str[round] === 't') {
      result += 'T';
    } else if (str[round] === 'u') {
      result += 'U';
    } else if (str[round] === 'v') {
      result += 'V';
    } else if (str[round] === 'w') {
      result += 'W';
    } else if (str[round] === 'x') {
      result += 'X';
    } else if (str[round] === 'y') {
      result += 'Y';
    } else if (str[round] === 'z') {
      result += 'Z';
    } else {
      result += str[round];
    }

    round++;
  }

  return result;
};

export const calculateLength = (str) => {
  let num = 0;
  while (str[num]) {
    num++;
  }
  return num;
};

export const calculateToLowerCase = (str) => {
  let result = '';
  let round = 0;
  while (str[round]) {
    if (str[round] === 'A') {
      result += 'a';
    } else if (str[round] === 'B') {
      result += 'b';
    } else if (str[round] === 'C') {
      result += 'c';
    } else if (str[round] === 'D') {
      result += 'd';
    } else if (str[round] === 'E') {
      result += 'e';
    } else if (str[round] === 'F') {
      result += 'f';
    } else if (str[round] === 'G') {
      result += 'g';
    } else if (str[round] === 'H') {
      result += 'h';
    } else if (str[round] === 'I') {
      result += 'i';
    } else if (str[round] === 'J') {
      result += 'j';
    } else if (str[round] === 'K') {
      result += 'k';
    } else if (str[round] === 'L') {
      result += 'l';
    } else if (str[round] === 'M') {
      result += 'm';
    } else if (str[round] === 'N') {
      result += 'n';
    } else if (str[round] === 'O') {
      result += 'o';
    } else if (str[round] === 'P') {
      result += 'p';
    } else if (str[round] === 'Q') {
      result += 'q';
    } else if (str[round] === 'R') {
      result += 'r';
    } else if (str[round] === 'S') {
      result += 's';
    } else if (str[round] === 'T') {
      result += 't';
    } else if (str[round] === 'U') {
      result += 'u';
    } else if (str[round] === 'V') {
      result += 'v';
    } else if (str[round] === 'W') {
      result += 'w';
    } else if (str[round] === 'X') {
      result += 'x';
    } else if (str[round] === 'Y') {
      result += 'y';
    } else if (str[round] === 'Z') {
      result += 'z';
    } else {
      result += str[round];
    }

    round++;
  }

  return result;
};

export const calculateCharAt = (str, position) => {
  let round = 0;
  while (str[round]) {
    if (round === position) {
      return str[round];
    }
    round++;
  }
};

export const calculateIncludes = (str, letter) => {
  let rounds = 0;
  let container = '';
  while (str[rounds]) {
    container = str[rounds];
    if (letter === container) {
      return true;
    }
    rounds++;
    return false;
  }
};

export const calculateStartWith = (str, initial) => {
  let round = 0;
  let container = '';
  while (str[round]) {
    container += str[round];
    if (container === initial) {
      return true;
    }
    round++;
  }
  return false;
};
