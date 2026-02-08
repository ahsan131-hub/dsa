/**
 * Search for a target value in a 2D matrix where:
 * - Each row is sorted in ascending order
 * - The first integer of each row is greater than the last integer of the previous row
 * 
 * Time Complexity: O(log m + log n) where m = rows, n = columns
 * Space Complexity: O(1)
 * 
 * @param {number[][]} matrix - 2D sorted matrix
 * @param {number} target - value to search for
 * @return {boolean} - true if target exists, false otherwise
 */
function searchMatrix(matrix, target) {
    // Edge case handling
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // Binary search to find the correct row
    let top = 0;
    let bottom = rows - 1;
    let targetRow = -1;
    
    while (top <= bottom) {
        const midRow = top + Math.floor((bottom - top) / 2);
        const firstVal = matrix[midRow][0];
        const lastVal = matrix[midRow][cols - 1];
        
        if (target < firstVal) {
            bottom = midRow - 1;
        } else if (target > lastVal) {
            top = midRow + 1;
        } else {
            // Target must be in this row
            targetRow = midRow;
            break;
        }
    }
    
    // If no valid row found, target doesn't exist
    if (targetRow === -1) {
        return false;
    }
    
    // Binary search within the found row
    let left = 0;
    let right = cols - 1;
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        
        if (matrix[targetRow][mid] === target) {
            return true;
        } else if (matrix[targetRow][mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
}

// Test cases that demonstrate thoroughness
function runTests() {
    const testCases = [
        {
            matrix: [[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]],
            target: 40,
            expected: true,
            description: "Target at end of matrix"
        },
        {
            matrix: [[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]],
            target: 1,
            expected: true,
            description: "Target at beginning of matrix"
        },
        {
            matrix: [[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]],
            target: 12,
            expected: true,
            description: "Target in middle row"
        },
        {
            matrix: [[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]],
            target: 5,
            expected: false,
            description: "Target doesn't exist (between rows)"
        },
        {
            matrix: [[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]],
            target: 15,
            expected: false,
            description: "Target doesn't exist (within row range)"
        },
        {
            matrix: [[1]],
            target: 1,
            expected: true,
            description: "Single element matrix - found"
        },
        {
            matrix: [[1]],
            target: 2,
            expected: false,
            description: "Single element matrix - not found"
        },
        {
            matrix: [],
            target: 1,
            expected: false,
            description: "Empty matrix"
        },
        {
            matrix: [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]],
            target: 3,
            expected: true,
            description: "LeetCode example"
        }
    ];
    
    console.log("Running test cases...\n");
    let passed = 0;
    
    testCases.forEach((test, index) => {
        const result = searchMatrix(test.matrix, test.target);
        const status = result === test.expected ? "✓ PASS" : "✗ FAIL";
        
        if (result === test.expected) passed++;
        
        console.log(`Test ${index + 1}: ${status}`);
        console.log(`  ${test.description}`);
        console.log(`  Expected: ${test.expected}, Got: ${result}\n`);
    });
    
    console.log(`Results: ${passed}/${testCases.length} tests passed`);
}

runTests();